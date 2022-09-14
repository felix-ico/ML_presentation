---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
image: './cover.jpg'
layout: image-right

# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# My Experience DallE and Stable Difusion

---
layout: image-right
image: './wawta.jpg'
---

# What are we talking about?

<ul>
  <li v-click>Machine learning models used to generate digital images</li> 
<li v-click>Machine learning model: a program trained on large datasets that can find patterns or make decisions on new data.</li>
<li v-click>DallE, stable diffusion, disco diffusion, midjourney, etc are all models built for similar tasks</li>
</ul>

---
layout: image-right
image: './wctd.jpg'
---

# What can they do? 

---
layout: image-right
image: './txt2img.jpg'
---
# txt2img
<ul>
<li v-click> text to image involves creating an imput prompt in natural language that the model will try to interpret to generate an image </li>
</ul>
---

# Some samples

<h4>DallE txt2img: a motorcycle on a tree in the style of Salvador Dalí </h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/motorcycle1.png" class=" rounded shadow" />


</div>
<div>
 <img src="/txt2img/motorcycle2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/motorcycle3.png" class=" rounded shadow" />
</div>

</div>
</div>

---

# Some samples

<h4>DallE txt2img: a japanese woodprint of Godzilla in a city</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/godzilla.png" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/godzilla2.png" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/godzilla3.png" class=" rounded shadow" />
</div>

</div>
</div>

---

# Some samples

<h4>Stable Diffusion txt2img: a monkey riding a giraffe, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/monkey3.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/monkey6.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/monkey7.jpg" class=" rounded shadow" />
</div>

</div>
</div>

---

# Some samples

<h4>Stable Diffusion txt2img: Albert Einstein wearing sunglasses driving a sports car, photograph</h4><br/> 
<div v-click> 
<div class="grid grid-cols-3 grid-rows-2 gap-2">
<div>

<img src="/txt2img/einstein1.jpg" class=" rounded shadow" />

</div>
<div>
 <img src="/txt2img/einstein2.jpg" class=" rounded shadow" />


</div>

<div>

 <img src="/txt2img/einstein3.jpg" class=" rounded shadow" />
</div>

</div>
</div>

---
layout: image-right
image: './img2img.jpg'

---

# img2img
<ul>
<li v-click> image to image allows giving the model a starting image </li>
</ul>
---

# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>


---


# Some samples
 <h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/samurai_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/samurai1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/samurai2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/samurai3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>


---


# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


</div>

---

# Some samples

<h4>DallE image variations</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/manonwire_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/manonwire1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/manonwire2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/manonwire3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>

---


# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>
</div>

---

# Some samples

<h4>Stable Diffusion img2img: portrait of man made of vegetables and fruit in the style of Arcimboldo</h4>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci1.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci2.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci3.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/img2img/arci4.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/img2img/arci5.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>
  <div>
  <img src="/img2img/arci6.png" h-50 class=" rounded shadow" />
  <span>variation</span>


  </div>

  <div>

  <img src="/img2img/arci7.png" h-50 class=" rounded shadow" />
  <span>variation</span>

  </div>


</div> 

---
layout: image-right
image: './inpainting.jpg'
---

# Inpainting
<ul>
<li v-click> inpainting allows editing a masked selection of a source image </li>
</ul>
---

# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>

---


# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/hamster_original.png" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/hamster_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/hamster1.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>


  </div>

  <div>

  <img src="/inpainting/hamster2.png" h-50 class=" rounded shadow" />
  <span>a hamster </span>

  </div>


</div>


---

# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>


</div>

---


# Some samples


<h4>DallE inpainting</h4><br/> 

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/inpainting/flag_original.jpg" h-50 w-50 class=" rounded shadow" />
  <span>original</span>
  </div>


  <div>

  <img src="/inpainting/flag_mask.png" h-50 class=" rounded shadow" />
  <span>mask</span>

  </div>
  <div>
  <img src="/inpainting/flag1.png" h-50 class=" rounded shadow" />
  <span>a peace flag </span>


  </div>

  <div>

  <img src="/inpainting/flag2.png" h-50 class=" rounded shadow" />
  <span>a peace flag waving, realistic photograph, high detail </span>

  </div>


</div>


---
layout: image-right
image: './limitations.jpg'
---


# Limitations
<ul>
<li v-click>
  faces, hands, text
</li>
<li v-click>
  output only as good as the input (input prompt *and* training data set )
</li>
<li v-click>
  dificult to get consistent results
</li>

<li v-click>
  Dalle:
  <ul>
   <li>15 credits per month, 4 images per credit</li>
  <li>content filters</li>
  <li>closed source</li>
  </ul>
</li>

<li v-click>
  Stable Diffusion: if running locally only as strong/fast as your GPU
</li>
</ul>

---

#  Experimenting with different settings

<div style="display: flex; justfy-content: space-between;">
<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/original.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> original, 4fps </span>
</div>


<div style="padding: 8px;">
  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/strength2.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> standard settings, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>

<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseed.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic,  increasing strength by 10 on each loop </span>
</div>


<div style="padding: 8px;">

  <video autoplay loop width="180" height="180" controls>
    <source src="/videos/sameseedchangedimm.mp4" type="video/mp4">
  </video> 
  <span style="font-size:8px; display: flex;"> same seed number, input prompt: futuristic, increasing ddimm by 10 on each loop </span>

</div>
</div>

---
layout: image-right
image: './fails.jpg'

---

# FAILS

---

# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>
</div>

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

---


# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>


---

  
# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>


<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

---

  
# FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

---

  # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>

</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

---

 # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>
  <div>

  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>

  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>

---

 # FAILS

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/arci.jpg" h-50 w-50 class=" rounded shadow" />
  <span class="label">portrait of man made of vegetables and fruit in the style of Arcimboldo</span>
  </div>


  <div>

  <img src="/fails/monkey.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>

  </div>
  <div>
  <img src="/fails/monkey2.jpg" h-50 class=" rounded shadow" />
  <span class="label">a monkey riding a giraffe</span>


  </div>

  <div>

  <img src="/fails/nosferatu.png" h-50 class=" rounded shadow" />
  <span class="label">nosferatu dancing in a club, award winning photography</span>

  </div>


</div>

<div class="grid grid-cols-4 gap-2">
  <div>
  <img src="/fails/painter.png" h-50 w-50 class=" rounded shadow" />
  <span class="label">painter painting himself</span>
  </div>
  <div>


  <img src="/fails/einstein.png" h-50 class=" rounded shadow" />
  <span class="label">albert einstein and winnie the pooh on a boat, photorealistic</span>


  </div>
  <div>

  <img src="/fails/maneatingmoney.png" h-50 class=" rounded shadow" />
  <span class="label">man eating money, photograph</span>

  </div>
  <div>
  <img src="/fails/marx.jpg" h-50 class=" rounded shadow" />
  <span class="label">karl marx as a hamster</span>


  </div>
</div> 

<style>
  .label {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  </style>
