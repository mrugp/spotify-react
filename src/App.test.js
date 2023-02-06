import { render, screen,fireEvent, findAllByRole,queryByAttribute  } from '@testing-library/react';
import App from './App';
import React from 'react'
//import { mocked } from 'ts-jest/utils';
//import fetch , { Response } from 'node-fetch';
//const mockedFetch = mocked(fetch, true);
//import axiosMock from "axios";
global.fetch = jest.fn(
  // Promise.resolve({
  //   json: () => Promise.resolve({data:{ artists:{items: [{ CAD: 1.42 }]} }}),
  // })
);


describe('pre-login',()=>{

  
  it('renders heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/spotify react/i);
    expect(linkElement).toBeInTheDocument();
  });
   
  it('renders login link ',()=>{
    render(<App />);
    expect(screen.getByText('Login to Spotify').closest('a')).toHaveAttribute('href', 'https://accounts.spotify.com/authorize?client_id=bd0224386916428a95c13b5f72e84be2&redirect_uri=http://localhost:3000&response_type=token')
    
    })

    it('renders please login', () => {
      render(<App />);
      const login = screen.getByText(/please login/i);
      expect(login).toBeInTheDocument();
    });
  
})

describe('post-login',()=>{

  
  it('renders logout button', () => {
    const access_token = 'fake';
    window.localStorage.setItem('token', access_token);
    render(<App />);
  console.log("screen debug",screen.debug())
  const button = screen.getByText(/Logout/i)
  expect(button).toBeInTheDocument();
  
  });
   
  it('renders input box', () => {
    const access_token = 'fake';
    window.localStorage.setItem('token', access_token);
    render(<App />);
  console.log("screen debug",screen.debug())
  const inputBox = screen.getByPlaceholderText(/Search for your favourite song or artist.../i)
  expect(inputBox).toBeInTheDocument();
  
  });

  it('should fire click event',()=>{

    const access_token = 'fake';
    window.localStorage.setItem('token', access_token);
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search for your favourite song or artist.../i)
    fireEvent.change(searchInput, { target: { value: 'test' } })
    
    expect(searchInput.value).toBe('test')

  })

  it('should display search button',()=>{

    const access_token = 'fake';
    window.localStorage.setItem('token', access_token);
    const getById = queryByAttribute.bind(null, 'id');

    const dom = render(<App />);
    const searchButton = getById(dom.container, 'searchButton');
    expect(searchButton).toBeInTheDocument()


  })
  it('should display list of singers',async () =>{
    const access_token = 'fake';
   
    fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ artists:{items: [{ id:1,images:[ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
        "width" : 640
      } ],name:'mru'}]} }),
    }))

  
    
    window.localStorage.setItem('token', access_token);
    const getById = queryByAttribute.bind(null, 'id');

    const dom = render(<App />);
    const searchButton = getById(dom.container, 'searchButton');
    await fireEvent.click(searchButton)
    
    const list = await screen.findAllByRole('listitem')
    expect(list).toHaveLength(1)

  })

})
describe('logout functionality',()=>{

  
  it('logs out on button click', () => {
    render(<App />);
    const logOut = screen.getByText(/Logout/i)
    fireEvent.click(logOut)
    const login = screen.getByText(/please login/i);
    expect(login).toBeInTheDocument();
   


  });
   
})






