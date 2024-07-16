'use client';

import PhotosGet, { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';
import { useState, useEffect, useRef } from 'react';
import Loading from '@/components/Helper/loading';
import styles from './feed.module.css';

export default function Feed({ photos, user }: { photos: Photo[]; user?: 0 | string }) {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);

  const [page, setPage] = useState(1);

  const fectching = useRef(false);
  function infiteScroll() {
    if (fectching.current) return;
    fectching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fectching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiteScroll);
      window.addEventListener('wheel', infiteScroll);
    } else {
      window.removeEventListener('scroll', infiteScroll);
      window.removeEventListener('wheel', infiteScroll);
    }
    return () => {
      window.removeEventListener('scroll', infiteScroll);
      window.removeEventListener('wheel', infiteScroll);
    };
  }, [infinite]);

  useEffect(() => {
    if (page == 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await PhotosGet(
        { page, total: 6, user: 0 },
        {
          cache: 'no-store',
        },
      );

      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
    console.log({ page });
  }, [page]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      {infinite ? <div className={styles.loadingWrapper}>{loading && <Loading />}</div> : <p> Não existe mais postagem</p>}
    </div>
  );
}
