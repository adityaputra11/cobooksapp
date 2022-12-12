import {RootStackParamList} from './../../utils/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export interface Books {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Book[];
}

export interface Book {
  key: string;
  title: string;
  edition_count: number;
  authors: Author[];
}

export interface Author {
  name: string;
  key: string;
}

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
