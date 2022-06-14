import React,{useEffect} from 'react';
import {CategoryListing} from '../../components/CategoryListing/CategoryListing';
import Title from '../../components/Title/Title';
import {getListOfCategories, requestToken } from '../../state/action';
import {  useGameDispatch, useGameState } from '../../state/context';

export const Category = () =>{
    const {categorylist} = useGameState();
    const dispatch = useGameDispatch();
      
    useEffect(() => {
        if(!sessionStorage.getItem('token')){
            requestToken();
        }
        if(!categorylist.length){
            getListOfCategories(dispatch);
        }
    }, []);

    return (
        <div style={{width:"100%",padding:"0px 120px",boxSizing:"border-box"}}>
            <Title text="Question Category"/>
            <CategoryListing categoriesList={categorylist} />
        </div>
    )
}