import BasicList from '../../components/List/BasicList'

const HomePage = () => {
  return (
    <>
        <h1>Home Page</h1>
        <BasicList
          items={['apple', 'orange', 'pear']}
          printItems={(item) => <span>{item}</span>} />
    </>
  )
}

export { HomePage }
