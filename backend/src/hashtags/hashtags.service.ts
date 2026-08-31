import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HashtagsService {
  constructor(private readonly prisma: PrismaService) {}

  async processHashtags(reelId: string, hashtags: string[]) {
   
    const existingRelations = await this.prisma.reelHashtag.findMany({
      where: { reelId },
      select: { hashtagId: true },
    });

    await this.prisma.reelHashtag.deleteMany({
      where: { reelId },
    });

  
    if (existingRelations.length > 0) {
      const hashtagIds = existingRelations.map((r) => r.hashtagId);
      await this.prisma.hashtag.updateMany({
        where: { id: { in: hashtagIds } },
        data: { usageCount: { decrement: 1 } },
      });
    }

    if (hashtags.length === 0) return;

    for (const tag of hashtags) {
    
      const hashtag = await this.prisma.hashtag.upsert({
        where: { name: tag },
        update: {
          usageCount: { increment: 1 },
          recentScore: { increment: 1.5 },
        },
        create: {
          name: tag,
          usageCount: 1,
          recentScore: 1.5,
        },
      });

     
      await this.prisma.reelHashtag.create({
        data: {
          reelId,
          hashtagId: hashtag.id,
        },
      });
    }
  }

  async removeHashtagsForReel(reelId: string) {
    const existingRelations = await this.prisma.reelHashtag.findMany({
      where: { reelId },
      select: { hashtagId: true },
    });

    if (existingRelations.length > 0) {
      const hashtagIds = existingRelations.map((r) => r.hashtagId);
      await this.prisma.hashtag.updateMany({
        where: { id: { in: hashtagIds } },
        data: { usageCount: { decrement: 1 } },
      });

      await this.prisma.reelHashtag.deleteMany({
        where: { reelId },
      });
    }
  }

  async getTrending(limit: number = 10) {
    return this.prisma.hashtag.findMany({
      take: limit,
      orderBy: [{ recentScore: 'desc' }, { usageCount: 'desc' }],
    });
  }

  async search(query: string, limit: number = 10) {
    const sanitizedQuery = query.replace('#', '').toLowerCase();
    return this.prisma.hashtag.findMany({
      where: {
        name: {
          startsWith: sanitizedQuery,
          mode: 'insensitive',
        },
      },
      take: limit,
      orderBy: { usageCount: 'desc' },
    });
  }

  async getReelsByHashtag(name: string, limit: number = 20, cursor?: string) {
    const sanitizedName = name.replace('#', '').toLowerCase();

    const hashtag = await this.prisma.hashtag.findUnique({
      where: { name: sanitizedName },
    });

    if (!hashtag) return { reels: [], nextCursor: null };

    const reelHashtags = await this.prisma.reelHashtag.findMany({
      where: { hashtagId: hashtag.id },
      take: limit + 1,
      ...(cursor
        ? {
            skip: 1,
            cursor: {
              reelId_hashtagId: { reelId: cursor, hashtagId: hashtag.id },
            },
          }
        : {}),
      orderBy: { createdAt: 'desc' },
      include: {
        reel: {
          include: {
            creator: {
              select: {
                id: true,
                name: true,
                username: true,
                avatar: true,
                isVerified: true,
              },
            },
            taggedUsers: {
              select: { id: true, username: true, avatar: true },
            },
          },
        },
      },
    });

    let nextCursor: string | null = null;
    if (reelHashtags.length > limit) {
      const nextItem = reelHashtags.pop();
      nextCursor = nextItem?.reelId || null;
    }

    return {
      reels: reelHashtags.map((rh) => rh.reel),
      nextCursor,
    };
  }
}
