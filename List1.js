import React,{useState} from 'react'

const List1 = () => {
    const [list, setList]=useState([
                                         'person1',
                                         'person2',
                                         'person3',
                                         'person4'
                                                      ])
    

  return (
    <div>
        <ul>
            {
            list.map((ele,i) => {
                return <li key={i}>{ele}</li>
            })
            }
      </ul>
    </div>
    

    


  )
}

export default List1;