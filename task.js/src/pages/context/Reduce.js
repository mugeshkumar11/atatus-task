
export const initialstate = {
     event:[],
    
 };
 export const stateReducer = (state, action) =>{
     console.log("action", state, action);
 

 switch(action.type){
    case 'setevent':

        return{
            ...state,
            event:action.payload
        }
     case 'update':
           return{
            ...state,
            event:[...state.event.filter((item)=>item.id!==action.payload.id),action.payload]
           }
    case 'deltask':
            return{
                ...state,
                event:state.event.filter((item)=>item.id!== action.payload)
            }
}
 }