import { login } from "./actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

function getErrorMessage(error?: string) {
  switch (error) {
    case "missing":
      return "Informe seu e-mail e senha.";

    case "invalid":
      return "E-mail ou senha inválidos.";

    case "session":
      return "Não foi possível validar sua sessão.";

    case "unauthorized":
      return "Este usuário não possui acesso ao painel administrativo.";

    default:
      return null;
  }
}

export default async function AdminLoginPage({
  searchParams,
}: LoginPageProps) {
  const params = await searchParams;

  const errorMessage =
    getErrorMessage(params.error);

  return (
    <main className="admin-login-page">
      <div className="admin-login-orb admin-login-orb--one" />
      <div className="admin-login-orb admin-login-orb--two" />

      <section className="admin-login-card">
        <div className="admin-login-brand">
          LOJAS <strong>+BRASIL</strong>
        </div>

        <div className="admin-login-heading">
          <span>PAINEL ADMINISTRATIVO</span>

          <h1>Bem-vindo</h1>

          <p>
            Entre com suas credenciais para
            administrar sua loja.
          </p>
        </div>

        {errorMessage && (
          <div
            className="admin-login-error"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        <form
          action={login}
          className="admin-login-form"
        >
          <label>
            <span>E-mail</span>

            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              required
            />
          </label>

          <label>
            <span>Senha</span>

            <input
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </label>

          <button type="submit">
            Entrar no painel
          </button>
        </form>

        <div className="admin-login-footer">
          Área restrita • Lojas +Brasil
        </div>
      </section>
    </main>
  );
}
