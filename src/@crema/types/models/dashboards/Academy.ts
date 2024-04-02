export type AcademyType = {
  academicStats: AcademicStatType[];
  courseCategories: CourseCategoryType[];
  profile: ProfileType;
  courses: CoursesType;
  notifications: NotificationType[];
  courseDetails: CourseDetailType[];
  learningData: LearningDaumType[];
  latestResults: LatestResultType[];
  classData: ClassDaumType[];
  studentRankings: StudentRankingType[];
  grades: GradeType[];
  relatedCourses: RelatedCourseType[];
  videoPromo: VideoPromoType;
};

export type AcademicStatType = {
  id: number;
  title: string;
  count: string;
  new: string;
  badgeColor: string;
  bgcolor: string;
  icon: string;
};

export type CourseCategoryType = {
  id: number;
  title: string;
  desc: string;
  lessons: number;
  xp: number;
  images: ImageType[];
};

export type ImageType = {
  image: string;
  title: string;
};

export type ProfileType = {
  id: number;
  profile_pic: string;
  name: string;
  designation: string;
  achievements: number;
  friends: number;
};

export type CoursesType = {
  categories: CategoryType[];
  courses: CourseType[];
};

export type CategoryType = {
  id: number;
  title: string;
  slug: string;
};

export type CourseType = {
  id: number;
  title: string;
  duration: string;
  rating: number;
  isCompleted: boolean;
  thumb: string;
};

export type NotificationType = {
  id: number;
  bgcolor: string;
  color: string;
  letter: string;
  content: string;
  date: string;
};

export type CourseDetailType = {
  id: number;
  title: string;
  thumb: string;
  level: string;
  coveredDuration: string;
  totalDuration: string;
  coveredPractice: string;
  totalPractice: string;
  graphData: GraphDaumType[];
};

export type GraphDaumType = {
  month: string;
  duration: number;
};

export type LearningDaumType = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  percentage: number;
};

export type LatestResultType = {
  id: number;
  chapter: string;
  topic: string;
  percentage: number;
};

export type ClassDaumType = {
  id: number;
  name: string;
  percent: number;
  icon: string;
};

export type StudentRankingType = {
  id: number;
  name: string;
  profile_pic: string;
  courseId: number;
  courseName: string;
  totalGrade: number;
  ranking: number;
  category: string;
};

export type GradeType = {
  month: string;
  grades: number;
};

export type RelatedCourseType = {
  id: number;
  image: string;
  title: string;
  author: string;
  views: string;
};

export type VideoPromoType = {
  title: string;
  owner: string;
  category: string;
  assignments: AssignmentType[];
};

export type AssignmentType = {
  id: number;
  title: string;
  desc: string;
  students: number;
  daysLeft: number;
};
