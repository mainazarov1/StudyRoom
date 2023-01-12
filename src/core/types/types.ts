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