import logo from './logo.svg';
import './App.css';
import React, { Component,useState } from 'react';

// import FocusInput from './components/FocusInput';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import Counter from './components/Counter';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import HookStateArray from './components/HookStateArray';




// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './components_router/Home'
// import About from './components_router/About'
// import NavBar from './components_router/NavBar';
// import Order from './components_router/Order';
// import Products from './components_router/Products';
// import { NewProducts } from './components_router/NewProducts';
// import { FeaturedProducts } from './components_router/FeaturedProducts';
// import { Users } from './components_router/Users';
// import { UserDetails } from './components_router/UserDetails';
// import NoMatch from './components_router/NoMatch';
// import Admin from './components_router/Admin';
import {Table,Button} from "antd"

// export const userContext = React.createContext();
// export const channelContext = React.createContext();

function App() {
  let flag='';
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedAge,setSelectedAge]=useState([])
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const handleOnChange=(selectedRowKeys)=>{
    console.log("selectedrow  keys are",selectedRowKeys)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    console.log(newSelectedRowKeys);
    newSelectedRowKeys.map((item)=>{
        console.log(data[item].age);
       flag=flag+' '+data[item].age;
    });
    console.log(flag);
    setSelectedAge(()=>[flag]);
    
    
    
  };
  const rowSelection = {
    selectedRowKeys,
    onSelectAll:()=>{console.log('all Selected')},
    // onSelectAll:(selected)=>{
    //   if (selected) {
    //     this.setselectedAge({ selectedRowKeys: data.map(row => row.age) });
    //   } else {
    //     this.setSelectedAge({ selectedRowKeys: [] });
    //   }
    // },
  
    // 

    


    onChange: onSelectChange,
    onSelect:(record)=>{
      // if((selectedAge.includes(record.age))){
      //   setSelectedAge((selectedAge)=>selectedAge.filter((row)=>row !== record.age))
        
      // }
      // else{
      //   setSelectedAge((selectedAge)=>[...selectedAge,record.age]);
      // }
      
  
    },
    // selections: [
    //   Table.SELECTION_ALL,
    //   Table.SELECTION_INVERT,
    //   Table.SELECTION_NONE,
    //   {
    //     key: 'odd',
    //     text: 'Select Odd Row',
    //     onSelect: (changeableRowKeys) => {
    //       let newSelectedRowKeys = [];
    //       newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
    //         if (index % 2 !== 0) {
    //           return false;
    //         }
    //         return true;
    //       });
    //       setSelectedRowKeys(newSelectedRowKeys);
    //     },
    //   },
    //   {
    //     key: 'even',
    //     text: 'Select Even Row',
    //     onSelect: (changeableRowKeys) => {
    //       let newSelectedRowKeys = [];
    //       newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
    //         if (index % 2 !== 0) {
    //           return true;
    //         }
    //         return false;
    //       });
    //       setSelectedRowKeys(newSelectedRowKeys);
    //     },
    //   },
    // ],
  };
  const hasSelected = selectedRowKeys.length > 0;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter:true
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter:true
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32+i,
    address: `London, Park Lane no. ${i}`,
  });
}
  return (
    <div className="App">
      <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        {selectedAge}
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={handleOnChange}/>
        {/* <ErrorBoundary>
        <Hero heroname="allu arjun" />
        </ErrorBoundary>
    
          <ErrorBoundary>
          <Hero heroname="ntr" />
          </ErrorBoundary>
    
            <ErrorBoundary>
            <Hero heroname='joker' /> 
            </ErrorBoundary>
            <FocusInput />
              <h1>Examples</h1>
            <ClickCounter  name="udayasree" />
            <HoverCounter  name="udayasree" />
              <Counter
                render={(count, incrementCount) => (
                  <ClickCounterTwo count={count} incrementCount={incrementCount} />
                )}
              />
              <Counter
                render={(count, incrementCount) => (
                  <HoverCounterTwo count={count} incrementCount={incrementCount} />
                )}
              />
              <UserProvider value='vishwas'>
                  <ComponentC />
              </UserProvider>
                  
            <HookStateArray />
        <userContext.Provider value={'vishwas'}>
          <channelContext.Provider value={'codevolution'}>
            <ComponentC />
          </channelContext.Provider>
        </userContext.Provider>*/}
        

       {/* <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path="order" element={<Order/>}></Route>
                  {/* Nested Routing 
                  <Route path='Products' element={<Products/>}>
                    <Route index element={<FeaturedProducts/>} />
                    <Route path='featured' element={<FeaturedProducts/>} />
                    <Route path='new' element={<NewProducts/>}/>
                  </Route>
                        {/* dynamic routing   
                  <Route path='users' element={<Users/>}>
                    <Route path=':userId' element={<UserDetails/>}/>
                    <Route path='admin' element={<Admin/>}/>
                  </Route>

                   no match route
                  <Route path='*' element={<NoMatch/>}/>
                </Routes>
        </BrowserRouter> */}

      </div>
    </div>
  );
}

export default App;
