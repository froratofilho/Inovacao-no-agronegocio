import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo('Página não encontrada', 'O endereço acessado não existe.');
  return (
    <PageHero kicker="Erro 404" title="Esta rota saiu do mapa." intro="O endereço acessado não existe ou foi alterado. Volte ao início para continuar explorando.">
      <div className="mt-10"><Button to="/">Voltar ao início</Button></div>
    </PageHero>
  );
}
