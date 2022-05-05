import React, { Component } from 'react';

class LoopExample extends Component {
    render() {


        const data = ["demo", 1 , 2, 3, 4 , 5 ];


        //for 

        for(let i=0; i < data.length; i++){
            const element = data[i];
            // console.log(i);
        }


        //for of

        for(const index of data){
            // console.log(index);
        }

        //for in

        for(const index in data)
        {
            if(data.hasOwnProperty.call(data,index)){
                const element = data[index];
                // console.log(element);
            }

        }

        //for each 

        var element = data.forEach(element => {
            return element;
        })

        const returndata = data.map((res) => {
            return <p>{res}</p>
        })



        return (
            <div>
                {returndata}
            </div>
        );
    }
}

export default LoopExample;