
let blogs=[
    {id:0,content:'下载者一夜爆红'},
    {id:1,content:'下载者为什么这么好看'},
    {id:2,content:'下载者一夜暴富'},
]

let comments=[
    {id:0,msg:'下载者长那么好看,迟早的事儿'},
    {id:1,msg:'下载者父母就好看呢'},
    {id:2,msg:'下载者最可爱'}
]
let listeners = [];

let DataSource={
    //获取微博内容
    getBlogs(){
        return blogs
    },
    //获取评论
    getComments(){
        return comments
    },
    //修改微博内容
    upBlogs(newBlog){
        blogs.forEach((curBlog,i)=>{
            if(newBlog.id===curBlog.id){
                blogs[i] = Object.assign({},curBlog,newBlog)
            }
        })
        DataSource.broadCast()
    },
    //获取微博(拿id查这条微博是否存在)
    getBlogById(id){
        return blogs.find(isBlog=>{
            return isBlog.id===id
        })
    },
    //添加评论
    addComments(comment){
        comments.push(comment);
        DataSource.broadCast()
        
    },
    //订阅
    addChangeListener(handle){
        listeners.push(handle)
    },
    //删除
    removeChangeListener(handle){
        let newListener = [];
       listeners.forEach((listener,i)=>{
           if(listener !== handle){
               newListener.push(handle)
           }
       })
       listeners = newListener
    },
    //发布
    broadCast(){
        listeners.map((listener)=>{
            listener()
        })
    }
}

export default DataSource