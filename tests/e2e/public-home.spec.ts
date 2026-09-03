import { expect, test } from "@playwright/test";

test.describe("public home observed contract", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("exposes the observed hero and login actions", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Verifique sua Empresa no Facebook");
    await expect(page.getByRole("link", { name: "Minha Área", exact: true })).toHaveAttribute("href", "/login");
    await expect(page.getByRole("link", { name: "Acessar Minha Área", exact: true })).toHaveAttribute("href", "/login");
    await expect(page.getByRole("link", { name: "Ver Benefícios", exact: true })).toHaveAttribute("href", "#beneficios");
  });

  test("exposes all observed benefit cards", async ({ page }) => {
    const titles = [
      "+2.000 Envios no WhatsApp",
      "Limite de até $100k/dia",
      "Criar Apps no Facebook",
      "Proteção Contra Imposores",
      "Selo Azul de Verificação",
      "Suporte Prioritário Meta",
    ];
    for (const title of titles) await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
  });

  test("exposes the observed three-step process", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Verificação em 3 passos", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Cadastre e Adicione seu Domínio", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Configure o DNS em Minutos", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Verifique e Ative sua Empresa", exact: true })).toBeVisible();
  });

  test("exposes observed pricing and legal routes", async ({ page }) => {
    await expect(page.getByText("$100/mês", { exact: true })).toBeVisible();
    await expect(page.getByText("$150/mês", { exact: true })).toBeVisible();
    await expect(page.getByText("$200/mês", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Privacidade", exact: true })).toHaveAttribute("href", "/l/privacidade");
    await expect(page.getByRole("link", { name: "Termos", exact: true })).toHaveAttribute("href", "/l/termos");
  });
});
