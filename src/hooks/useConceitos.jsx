import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

function useConceitos() {
  //useQuery é um hook do React Query que é usado para buscar
  return useQuery({
    //queryKey é uma chave única que identifica a consulta. Ela é usada para armazenar e recuperar os dados em cache. Neste caso, a chave é 'conceitos', o que indica que esta consulta está relacionada aos conceitos.
    queryKey: ['conceitos'],
    //queryFn é a função que será executada para buscar os dados. Ela deve retornar uma promessa que resolve os dados ou lança um erro. Neste caso, a função é assíncrona e usa o cliente Supabase para buscar os dados da tabela 'conceitos', selecionando apenas os campos 'id' e 'nome_conceito'. Se houver um erro durante a consulta, ele será lançado para que o React Query possa lidar com ele.
    queryFn: async () => {
      //o const { data, error } é uma desestruturação do objeto retornado pela consulta ao Supabase. 
      //O método .from('conceitos') especifica a tabela da qual os dados serão buscados;
      //O método .select('id, nome_conceito') indica quais campos devem ser selecionados. Se ocorrer um erro durante a consulta, ele será lançado para que o React Query possa lidar com ele. Caso contrário, os dados serão retornados para serem usados no componente que chama este hook.
      const { data, error } = await supabase
        .from('conceitos')
        .select('id, nome_conceito')
        .order('id', { ascending: true });

      if (error) throw error;
      return data;
    },
    //staleTime é o tempo em milissegundos que os dados são considerados "frescos" ou "válidos". 
    //Durante esse período, o React Query não fará novas solicitações para buscar os dados, mesmo que o componente seja re-renderizado.
    staleTime: Infinity,
    cacheTime: Infinity
  });
}

//esta entre aspas pq é uma convenção para indicar que a função é um hook personalizado, ou seja, um hook criado pelo desenvolvedor para encapsular lógica de estado ou efeitos relacionados a um determinado recurso ou funcionalidade. O nome do hook deve começar com "use" para seguir as regras dos hooks do React e garantir que ele seja usado corretamente dentro de componentes funcionais.
export { useConceitos };