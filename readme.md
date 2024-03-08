### SCSS starter 

<hr>

### <center> FOLDER STRUCTRE </center>

<hr>

- ### assets 
>
- images
- fonst

 <hr>

 - ### css

> 
- style.css      (expaned)
- style.min.css  (minified)

 <hr>

 - ### public

 > 
- favicon      (folder)
- robots.txt  (SEO)

 <hr>

 - ### scss

 > 
- all  (folder)     (layout.scss , ETC)
- robots.txt  (SEO)



<hr>

### Variables

```
$varName: value;

for example: 👉 $text-color: red;

<hr>

```

### Nested in BEM

```

for example: 👉

<!-- HTML CODE -->



index.html

<div class="parent">
   <div class="parent__child">
      <span class="parent__child-inner"> 
       inner child
      </span>
   </div>
</div>

<!-- SCSS CODE -->

style.scss

.parent{

 width:100%;
 padding:50px;

   &__child{
      width:300px;
      height:300px;
      background:teal;
      

      &-inner{
        color: $text-color;
        font-size:20px;
      }
   } 
}

```


<hr>

### Extends

```

%extendName{
    property:value;
    ...
    ..
    .
}

<!-- call to extend -->

.className{
    @extand %extendName;
}

```


<hr>

### Mixins

```

@mixin mixinName($arg1, arg2, ....){
    property1:$arg1;
    property2:$arg2;
    color:red;
    ...
    ..
    .
}

<!-- call to extend -->

.className{
    @include mixnName(value1, value2 , ...);
}

```

![Alt text](image.png)