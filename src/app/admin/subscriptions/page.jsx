'use client'
import { useEffect,useState } from 'react'
import SubsTableItem from '@/app/Components/AdminComponents/SubsTableItem'
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {

  const [emails,setEmails] = useState([]);

  const fetchEmails = async () => {
    const resposne = await axios.get('/api/email');
    setEmails(resposne.data.emails);
  }

  const deleteEmail = async (mongoId) => {
    const resposne = await axios.delete('/api/email',{
      params:{
        id:mongoId
      }
    })
    if(resposne.data.success){
      toast.success(resposne.data.msg);
      fetchEmails();
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchEmails();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-8'>
        <h1>All Subscriptions</h1>
        <div className='relative h-[80vh] max-w-[850] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Email Subscription
                </th>
                <th scope='col' className='px-6 py-3 hidden sm:block'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
              
            <tbody>
              {emails.map((item,index) => {
                  return <SubsTableItem
                    key={index}
                    mongoId={item._id}
                    email={item.email}
                    date={item.date}
                    deleteEmail={deleteEmail} />
                })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default page