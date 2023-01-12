export interface TaskApi {
   id: number | string;
   title: string;
   points: number;
   deadLine: string;
   timePublication: string;
   htmlContent: string;
   isTeacher: boolean;
   countComments: number;
}

export interface User {
   display_name: string;
   email: string;
   password: string;
   access_token: string | null;
   image: string | null;
   id: number;
   token: string;
}

export interface Course {
   course_code: string;
   room: string;
   background: string | null;
   title: string;
   chapter: string;
   creator: string;
   creatorAvatar: string;
   role: string;
}
