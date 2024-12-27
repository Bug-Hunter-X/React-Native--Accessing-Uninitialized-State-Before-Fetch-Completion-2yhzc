```javascript
// Correct - using optional chaining
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some_api')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.someProperty || 'Loading...'}</Text> 
    </View>
  );
};

//Correct - conditional rendering
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('some_api')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return <Text>Loading...</Text>
  }
  return (
    <View>
      <Text>{data.someProperty}</Text>
    </View>
  );
};
```