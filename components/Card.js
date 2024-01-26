import React from "react"
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props)=>{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //pehle se hi like hua hai
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!=course.id)));
            toast.warning("Like Removed");
        }
        else{
            //pehle hi like nahi tha ye course
            //then insert the course in liked course
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pehle se
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully")
        }
    }
    return (
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden ">
            <div className="relative">
                <img src={course.image.url} className=""></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?
                            (<FcLike fontSize="1.75rem"></FcLike>):
                            (<FcLikePlaceholder fontSize="1.75rem"/>)
                            
                        }
                    </button>
                </div>
            </div>
            
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length>100?
                        (course.description.substr(0,100))+"...":
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;