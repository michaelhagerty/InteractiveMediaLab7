d3.select("body")
.append("img")
.attr("src", "wally.jfif")
.on("click", function()
   {
    d3.select(this)
    .attr("src", "Checkmark.jfif")
    
})

d3.select("body")
.append("img")
.attr("src", "Cezary.jfif")
.on("click", function()
   {
    d3.select(this)
    .attr("src", "RedX.png")
}
   )

d3.select ("h4")
.append ("img")
.attr ("src","wally.jfif")




