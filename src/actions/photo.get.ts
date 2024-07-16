'use server';

import { PHOTO_GET } from '@/functions/api';
import apiError from '@/functions/api.error';
import { Photo } from './photos-get';

export type IComment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: IComment[];
};

export default async function PhotoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, { next: { revalidate: 60, tags: ['photos', 'comment'] } });

    const data = (await response.json()) as PhotoData;
    if (!response.ok) throw new Error('Erro ao pegar a foto.');
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
