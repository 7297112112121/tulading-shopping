import { createStore } from 'vuex'


export default createStore({
    state :{
        GlobalId: 0,
        GlobalSubid: 0
    },
    mutations:{
        GlobalModificationGlobalId:(state,GlobalId)=>{
            state.GlobalId = GlobalId
        },
        GlobalModificationGlobalSubid:(state,GlobalSubid)=>{
            state.GlobalSubid = GlobalSubid
        }
    },
    
})

