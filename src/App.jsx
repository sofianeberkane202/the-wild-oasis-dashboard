/* eslint-disable react/react-in-jsx-scope */
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
function App() {
  return (
    <>
      <GlobalStyles />
      <div style={{ margin: '10px' }}>
        <Button size="small" variation="primary">
          Click me
        </Button>

        <Button size="medium" variation="secondary">
          Click me
        </Button>

        <Button size="medium" variation="danger">
          delete
        </Button>
      </div>
    </>
  );
}

export default App;
