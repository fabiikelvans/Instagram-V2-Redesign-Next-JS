import React from 'react'
import SuggestionList from './SuggestionList'

function Suggestions() {
  return (
    <div className='flex flex-col space-y-4 mt-6'>

      <h1 className='text-lg font-bold'>Suggestions for you</h1>

      <SuggestionList
      img={'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
      name={'Vera Cherry'}
      location={'Sibu Romania'}
      />

      <SuggestionList
      img={'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
      name={'John Doe'}
      location={'Germany'}
      />

      <SuggestionList
      img={'https://images.unsplash.com/photo-1559637621-d766677659e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
      name={'Megan Buke'}
      location={'Tehran Iran'}
      />

    </div>
  )
}

export default Suggestions