import React from 'react';
import expert1 from '../../../assets/images/experts/expert-1.jpg';
import expert2 from '../../../assets/images/experts/expert-2.jpg';
import expert3 from '../../../assets/images/experts/expert-3.jpg';
import expert4 from '../../../assets/images/experts/expert-4.jpg';
import expert5 from '../../../assets/images/experts/expert-5.jpg';
import expert6 from '../../../assets/images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id:1,name:'willim smith',img:expert1},
    {id:2,name:'jhon doe',img:expert2},
    {id:3,name:'max well',img:expert3},
    {id:4,name:'robin sun',img:expert4},
    {id:5,name:'sarmin salia',img:expert5},
    {id:6,name:'sukhon sukh',img:expert6},
]


const Experts = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>oue experts</h1>
            <div className="row">
                {
                    experts.map((expert) => <Expert key={expert.id} expert={expert}/>)
                }
            </div>
            
        </div>
    );
};

export default Experts;