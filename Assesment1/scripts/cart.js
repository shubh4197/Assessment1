function book(title,author,price)
{
    this.title=title;
    this.author=author;
    this.price=price;
}
var arr=[];
var book1=new book("1984","George Orwell","150");
arr.push(book1);
var book2=new book("The Alchemist","Paul Choelho","150");
arr.push(book2);
var book3=new book("Do Androids Dream of Electric Sheep?","Philip K. Dick","450");
arr.push(book3);
var book4=new book("The Chess Story","Stefan Zweig","300");
arr.push(book4);
var book5=new book("The Great Gatsby","F. Scott Fitzgerald","200");
arr.push(book5);
var book6=new book("The Hobbit  There and Back Again","J.R.R. Tolkien","300");
arr.push(book6);
var book7=new book("The Metamorphosis","Franz Kafka","350");
arr.push(book7);
var book8=new book("The old man and the sea","Ernest Hemingway","200");
arr.push(book8);
var book9=new book("Murder at orient expres","Agatha Christie","250");
arr.push(book9);
var book10=new book("The Little Prince","Franz Kafka","350");
arr.push(book10);
var book11=new book("A Study in Scarlet","Arthur Conan Doyal","350");
arr.push(book11);
var book12=new book("The Time Machine","H.G Wells","450");
arr.push(book12);
console.log(arr);
var index=0;
var sum=0;
$(".please").on("click",function(){
    console.log("ok")
     index=$(this).data("id");
    console.log(index);
    var msg="<label>Title:"+arr[index].title+"</label><br><label>Author:"+arr[index].author+"</label><br><label>Price:"+arr[index].price+"</label><button class='please1'>Add</button>";
    $("#rex").html(msg); 
    
})

$(document).on("click","button.please1",function(){
    console.log("ok1")
    var msg="<tr><td>"+arr[index].title+"</td><td>"+arr[index].price+"</td><tr>"
    $('#hi1').html(msg);
    var num=parseInt(arr[index].price);
    sum=sum+num;
    $("#hi2").html('Total: '+sum);
  
})