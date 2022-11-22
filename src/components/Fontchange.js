import React,{ useState } from 'react'

const Fontchange = () => {
    const [isEnable, setIsEnable] = useState(true);
    const [isColor, setIsColor] = useState("black");
    const [isSize, setIsSize] = useState("16px");
    const [isFonts, setIsFonts] = useState("Space Mono, monospace");

    const coloring={
        color:isColor,
        fontSize:isSize,
        fontFamily:isFonts,
      }

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bune ut efficitur quam. Morbi eleifend sollicitudin orci nec condimentum. Vestibulum id efficitur nisi. Sed egestas venenatis metus a Interdum. Morbi rutrum ullamcorper leo quis mattis. Mauris eo libero erat. Donec efficitur felis id accumsan tempus. Proin interdum lacus dui, et egestas dian viverra bibendum. Praesent ultrices augus an leo rutrum, ac mattis sapien pretium.
    
Sed nisl quan, eleifend nec auctor quis, aliquam id orci. Sed in aliquam lorem. Praesent convallis porttitor lobortis. Man fringilla faucibus magna vitae pretium. Suspendisse potents. Han ornare tincidunt odio id maximus, une orei ex, imperdiet eu loren et, sollicitudin dapibus tortor. Integer lacinia, eros sagittis elementum tincidunt, felis felis finibus ipsum, eu lobortis ante dui sit amet urna. Mulla facilisi. Maecenas ac sem dias. Morbi nec lacinia dolor. Curabitur interdum, augue eget auctor aliquan, libero lectus sagittis lectus, eget finibus eros arcu ac sem. Vestibulum bibendum quis eros eget ullamcorper. Nullam nulla ipsum, tincidunt eget fringilla vel, volutpat eget risus. Suspendisse fermentum ipsum sed lorem tempus blandit. Fusce in mauris id lorem gravida condimentum non sed neque. Maecenas dolor enim, consectetur in accumsan vitae, fermentum non velit, unc lorem metus, finibus ac tristique sed, imperdiet vel neque. In at odio nec massa varius accumsan nec vel felis. Pellentesque rutrum lobortis iaculis. Aenean varius, arca et dignissim feugiat, justo ex consequat leo, eu dapibre orel justo at nunc.

Vestibulum gravida laoreet orci, et varios arcu vestibulum vitae. Fusce congue, mi fringilla poscere gravida, nibh augue tempor elit, quis consequat est ligula quis magna. Sed sit amet lacus consectetur, sodales doi lacinia, viverra erat. Mullan auctor turpis is purus ultrices tristique. Aliquam lobortis sagittis quan non termentum. Integer suscipit tortor justo, consectetur molestie justo ullamcorper sed. Cras lobortis congue arst, ut pretium orel porta sec. Nullam at viverra nulla. Mulla porta leo vitae neque eleifend tempus a eget elit. Interdun et malesuada fames ac ante ipsum primis in faucibus. Maecenas egestas neque a tincidunt ornare. Maecenas et massa sapien. Maecenas ultrices nisi elit, a vestibulan erat suscipit at.`  
     
    return (
        <div>
            <div className='select_items'>
                <div>
                    <select onChange={(e)=>setIsEnable(e.target.value)}>
                        <option value="enabled">Allow Edit</option>
                        <option value="disabled">Edit Not Allow</option>
                    </select>
                </div>
                <div>
                    <select disabled={isEnable==="disabled" ? "enabled":""} onChange={(e)=>setIsColor(e.target.value)}>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div>
                    <select disabled={isEnable==="disabled" ? "enabled":""} onChange={(e)=>setIsSize(e.target.value)}>
                        <option value="12px">12</option>
                        <option value="13px">13</option>
                        <option value="14px">14</option>
                        <option value="15px">15</option>
                        <option value="16px">16</option>
                        <option value="17px">17</option>
                        <option value="18px">18</option>
                        <option value="19px">19</option>
                        <option value="20px">20</option>
                        <option value="21px">21</option>
                        <option value="22px">22</option>
                        <option value="23px">23</option>
                        <option value="24px">24</option>
                    </select>
                </div>
                <div>
                    <select disabled={isEnable==="disabled" ? "enabled":""} onChange={(e)=>setIsFonts(e.target.value)}>
                        <option value="Space Mono, monospace;">Monospace</option>
                        <option value="Roboto, sans-serif">Roboto</option>
                        <option value="Josefin Sans, sans-serif">Josefin Sans</option>
                        <option value="BhuTuka Expanded One, cursive">BhuTuka</option>
                        <option value="Monofett, cursive">Monofett</option>
                    </select>
                </div>
            </div>
            <div className='text_container'>
              <textarea style={coloring} value={paragraph}>
              </textarea>
            </div>
        </div>

    )
}

export default Fontchange;