import { createStore } from 'vuex'


export default createStore({
    state :{
        GlobalId: 0,
        GlobalSubid: 0,
        shop:[
            {
                id: 0,
                title: 0,
                desc: 0,
                src: 0,
                price: 0,
                shopor: 0,
                brief: 0,

            }

        ]
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

