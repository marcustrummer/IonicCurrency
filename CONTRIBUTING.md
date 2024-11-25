# Guia de Contribuição

Obrigado por considerar contribuir para o **App de Conversão de Moedas em Tempo Real**! Siga as diretrizes abaixo para garantir que sua contribuição seja útil e alinhada com os objetivos do projeto.

---

## Como Contribuir

1. **Clone o repositório**:  
   ```bash
   git clone https://github.com/seu-usuario/repo-conversao-moedas.git
   cd repo-conversao-moedas

   3. **Crie uma nova branch**:  
   - Siga o modelo de branch do Git Flow.  
   - Para correções de bugs:  
     ```bash
     git checkout -b fix/nome-do-bug
     ```  
   - Para novas funcionalidades:  
     ```bash
     git checkout -b feature/nome-da-funcionalidade
     ```

2. **Implemente as mudanças**:  
   - Realize suas alterações no código.  
   - Após finalizar, adicione os arquivos alterados:  
     ```bash
     git add .
     ```  
   - Faça o commit das alterações com uma mensagem descritiva:  
     ```bash
     git commit -m "feat: descrição breve da funcionalidade ou correção"
     ```

3. **Abra um Pull Request (PR)**:  
   - Suba as alterações para o repositório remoto:  
     ```bash
     git push origin nome-da-sua-branch
     ```  
   - No GitHub, abra um PR apontando para a branch `develop`.  
   - Inclua uma descrição clara e detalhada do que foi alterado, o problema que foi resolvido ou a nova funcionalidade implementada.

---

## Regras de Contribuição
- **Código Limpo**:  
  - Siga as boas práticas do TypeScript e o padrão de código da comunidade Angular.  
  - Escreva nomes claros e descritivos para variáveis, funções e métodos.

- **Commits Informativos**:  
  - Utilize mensagens de commit explicativas e padronizadas.  
  - Exemplos:  
    ```
    feat: adiciona suporte a gráficos de cotações
    fix: corrige erro na atualização de taxas de câmbio
    refactor: melhora desempenho do armazenamento local
    ```

- **Testes**:  
  - Inclua testes unitários ou de integração, sempre que possível, para validar suas alterações.

- **Documentação**:  
  - Atualize a documentação relevante, como o `README.md`, se necessário.

---

## Checklist para Pull Requests
Antes de abrir um PR, verifique se:
- [ ] O código foi testado e funciona como esperado.  
- [ ] A branch segue o padrão do Git Flow.  
- [ ] A branch de destino é `develop`.  
- [ ] Não há conflitos com a branch `develop`.  
- [ ] O código inclui testes (se aplicável).  
- [ ] A documentação foi atualizada (se necessário).

---

## Contato
Caso tenha dúvidas ou precise de suporte, abra uma **Issue** no repositório ou entre em contato pelo e-mail `seu-email@dominio.com`.

Obrigado por contribuir!

