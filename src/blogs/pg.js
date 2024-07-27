// add style to body
document.getElementsByTagName('body')[0].style = 'text-align: center; display: flex; align-items: center; justify-content: center; font-size: 16px; margin-top: 100px;'

// remove first two <td>
document.getElementsByTagName('td')[0].remove()
document.getElementsByTagName('td')[0].remove()

// remove first link (Paul Graham)
document.getElementsByTagName('td')[0].getElementsByTagName('a')[0].remove()

// remove first two <br>
document.getElementsByTagName('td')[0].getElementsByTagName('br')[0].remove()
document.getElementsByTagName('td')[0].getElementsByTagName('br')[0].remove()

// update table width
document.getElementsByTagName('table')[1].width = 600

// update title
document.getElementsByTagName('img')[0].width = 235
document.getElementsByTagName('img')[0].height = 25

// update font
document.getElementsByTagName('table')[1].getElementsByTagName('font')[0].size = 4
document.getElementsByTagName('table')[1].getElementsByTagName('font')[0].face = 'roboto'