
export interface Task {
  type: number;
  title: string;
  category?: string;
  category_id?: string;
  category_chain: string[];
  introduction: string;
  started_at: string;
  ended_at: string;
  duration: number;
  duration_min?: number;
  start_end_at: string[];
  student_ids: string[];
  paper_id: string;
  class_ids: string[];
}
