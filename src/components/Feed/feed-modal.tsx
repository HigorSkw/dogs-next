'use client';

import { PhotoData } from '@/actions/photo.get';
import PhotoContent from '../Photo/photo-content';
import styles from './feed-modal.module.css';
import { usePathname, useRouter } from 'next/navigation';

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathName = usePathname();

  if (pathName.includes('foto')) {
    return null;
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      router.back();
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />;
    </div>
  );
}
