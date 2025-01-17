import { gql } from '@apollo/client';

export const joinChapter = gql`
  mutation joinChapter($chapterId: Int!) {
    joinChapter(chapterId: $chapterId) {
      chapter_role {
        name
      }
    }
  }
`;

export const leaveChapter = gql`
  mutation leaveChapter($chapterId: Int!) {
    leaveChapter(chapterId: $chapterId) {
      chapter_role {
        name
      }
    }
  }
`;

export const chapterSubscribe = gql`
  mutation toggleChapterSubscription($chapterId: Int!) {
    toggleChapterSubscription(chapterId: $chapterId) {
      subscribed
    }
  }
`;
