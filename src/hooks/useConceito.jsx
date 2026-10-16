import { useQuery } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

//Essa função é um hook personalizado que utiliza o useQuery do React Query para buscar os dados de 
// um conceito específico a partir do seu id. O hook recebe o id como parâmetro e retorna os dados 
// do conceito correspondente, além de informações sobre o estado da consulta 
// (como loading, error, etc.). 
// A consulta só é executada se o id estiver presente, e os dados são considerados "frescos" indefinidamente, 
// evitando requisições desnecessárias.

function useConceito(id) {
  return useQuery({
    queryKey: ['conceito', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('conceitos')
        .select(`*,
          imagens(
            id_img,
            url,
            descricao_img
          ),
          videos(
            id_video,
            url_video,
            legenda
          )
        `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
},
//enabled é uma opção que permite controlar se a consulta deve ser executada ou não. No caso, a consulta só será executada se o id estiver presente (ou seja, for truthy). Isso é útil para evitar requisições desnecessárias quando o id ainda não está disponível.
enabled: !!id,
  //staleTime é o tempo que os dados são considerados "frescos". Durante esse período, o React Query não fará novas requisições para buscar os dados, mesmo que o componente seja re-renderizado. Isso é útil para evitar requisições desnecessárias e melhorar a performance da aplicação.
  staleTime: Infinity
  });
}

//esta entre aspas pq é uma convenção para indicar que a função é um hook personalizado, ou seja, um hook criado pelo desenvolvedor para encapsular lógica de estado ou efeitos relacionados a um determinado recurso ou funcionalidade. O nome do hook deve começar com "use" para seguir as regras dos hooks do React e garantir que ele seja usado corretamente dentro de componentes funcionais.
export { useConceito };