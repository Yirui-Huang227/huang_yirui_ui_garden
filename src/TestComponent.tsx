// intentionally broken code
const unused = 123; // missing semicolon (Prettier will complain)
const x = 'hello'; // spacing issues (ESLint will complain)

export const TestComponent = () => {
  return <div>Hi</div>;
}; // missing newline at EOF
