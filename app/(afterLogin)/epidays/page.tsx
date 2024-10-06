'use client';

import InnerLayout from '@/components/inner-layout';
import RecentComments from '@/components/recent-comments';
import RecentEpidays from '@/components/recent-epidays';
import TodayEmotion from '@/components/today-emotion';

export default function EpidaysPage() {
  return (
    <div className="bg-var-background py-[120px]">
      <InnerLayout className="flex flex-col gap-[140px]">
        <TodayEmotion />
        <RecentEpidays />
      </InnerLayout>
      <RecentComments />
    </div>
  );
}
