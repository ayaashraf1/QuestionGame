import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useGameDispatch, useGameState } from '../../state/context';
import {CategoryCard} from '../CategoryCard/CategoryCard';
import {getQuestions} from '../../state/action';
import './CategoryListing.css';
import { globalConfig } from '../../shared/globalConfig';

export const CategoryListing=({categoriesList}) =>{
    const {level,SelectedCategory}= useGameState();
    const dispatch = useGameDispatch();
    const navigate = useNavigate();
    const handleCategoryChange = async(e) =>{
        const categoryId = e.target.id;
        await getQuestions(categoryId,level,dispatch);
        navigate('/question')
    }
    useEffect(() => {
        if(SelectedCategory.length === 3){
            globalConfig.gameEndIn = Date.now();
            navigate('/score')
        }
    }, [])
    return (
        <div id="category-listing-container">
        {
            categoriesList.map((category)=>{
             const previousCategory = SelectedCategory&&SelectedCategory.indexOf(category.id) !== -1?true:false ;
             return  <CategoryCard category={category} key={category.id} clickMethod={handleCategoryChange} disable={previousCategory}/>
            })
        }
        </div>
    )
}