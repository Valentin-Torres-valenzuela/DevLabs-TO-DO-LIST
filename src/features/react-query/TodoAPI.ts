import { useQuery } from 'react-query';
import * as api from '../../api/api';

export function useTodos() {
    return useQuery('todos', api.getTodos);
}