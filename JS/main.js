// *** Toggel Navnbar Icon
const ToggelNav = document.querySelector(".toggelNav")
// Navbar
const Navbar = document.querySelector(".main-nav")
// Toggel Navbar Function
ToggelNav.addEventListener("click", (e) => {
    ToggelNav.classList.toggle("Q")
    Navbar.classList.toggle("open")
})

// *** User Pic
const UserPic = document.querySelector(".user-pic")
// Userbar List 
const UserList = document.querySelector(".user-list")
// Toggel UserList 
UserPic.addEventListener("click", (e) => {
    UserList.classList.toggle("openUserList")
})

// *** Data And Reusable Fun
// Client Data 
const ClientData = {
    "Sogert s.p.a.": {
        TipologiaCliente: "Agenzia",
        Agenzia: "Sogert S.p.a",
        RagioneSociale: "Sogert S.p.a",
        PIVA: "IT0123456789",
        CodiceFiscale: "IT0123456789",
        Telefono: "+39 123 456 7890",
        Fax: "+39 051 123402",
        mail: "myco@domain.com",
        indirizzo: "Via Napoli",
        Civico: "1",
        CAP: "80010",
        Città: "Napoli",
        Provincia: "Napoli",
    }
}
// Function To Render Client Document Files 
function ClientFileR(prop) {
    prop.forEach((S, i) => {
        let file = `
            <div class="file">
                <div class="flex">
                    <div ${i === 2 ? 'class= orange-icon' : null} >
                        ${i === 0 ?
                `<i class="fa-solid fa-clipboard-list"></i>` : i === 1 ?
                    `<i class="fa-solid fa-clipboard"></i>` : i === 2 ?
                        `<i class="fa-regular fa-square-plus plus"></i>` : ""
            }
                        <span>
                        ${i === 0 ? `Condizione` : i === 1 ? `Nota` : i === 2 ? `Field` : ""} sogert</span>
                    </div>
                    <i class="fa-solid fa-xmark orange-icon"></i>
                </div>
            </div>
            `
        S.nextElementSibling.innerHTML = file
        S.style.borderRadius = "0"
    })
}

// ***  Preventivo (Table) Data
let TbodyRows = document.querySelector("table tbody")
let TableData = [
    `                          
            <button class="flex-c">
                <i class="fa-solid fa-circle-chevron-down"></i>
                <ul class="mo-list">
                    <li>Altre opzioni</li>
                    <li>Modifica</li>
                    <li>Elimina</li>
                    <li>Duplica</li>
                    <li>Invia al cliente</li>
                    <li>Cambia stato</li>
                    <li>Assegna a agente</li>
                    <li>Carica documenti</li>
                </ul>
            </button>
        `,
    "PR-202200001",
    "Sogert s.p.a.",
    "Comune di Napoli",
    `                 
                <button class="flex btn list loop">
                    <span id="STATUS">In attesa</span>
                    <i class="fa-solid fa-caret-down"></i>
                </button>
            `,
    "Mario Rossi",
    "Mario Bianchi",
    "23/03/2022",
    "Non approvato",
    "-",
    `
            <button class="attaches btn">
                Allegati
            </button>
            `

]
let DisplayTableData = []
// For Loop On TableData To Fill Table with Data
for (let i = 0; i <= TableData.length; i++) {
    let Tabel =
        `     
        <tr>
           ${TableData.map((t, k) => (
            `<td class="${k === 0 ? " more-options flex-c" : k === 4 ? "status" : k === 10 ? "flex-c" : ""}" >
            ${t}
            </td >
            `))
        }
        </tr >
        `
    ///// Replace Sec Status Button For Loop
    i === 1 ? Tabel = `     
    <tr>
       ${TableData.map((t, k) => (
        `<td class="${k === 0 ? " more-options flex-c" : k === 4 ? "status" : k === 10 ? "flex-c" : ""}" >
        ${k === 4 ? `
        <button class="flex btn loop" id="loopButton">
            <span>In attesa</span>
            <i class="fa-solid fa-caret-down"></i>
        </button>
        `: t}
        </td >
        `))
        }
    </tr >
        `: Tabel
    DisplayTableData.push(Tabel)
    TbodyRows ? TbodyRows.innerHTML = DisplayTableData.toString().replace(/,/g, "") : null
}
if (TbodyRows && TbodyRows.innerHTML) {
    // *** Option List First Button
    const iconButton = document.querySelectorAll(".more-options button")[0]
    // Option List
    const optionList = document.querySelector(".mo-list")
    // Toggel Show Class On More-Option List
    iconButton.addEventListener("click", (e) => {
        // Set td to Visible And Toggle Show
        optionList.parentElement.parentElement.style.overflow = "visible"
        optionList.classList.toggle("show")
    })
    // Close More-Option List When Click Outside
    iconButton.addEventListener('blur', (e) => {
        // Remove Show Class And Set td to Hidden 
        optionList.classList.remove("show")
        optionList.parentElement.parentElement.style.overflow = "hidden"
    })
    // *** Status List Button
    // Status List Data
    const StatusListData = [
        {
            content: "In attesa",
            className: "btn"
        },
        {
            content: "Approvato da responsabile",
            className: "ligth-green"
        },
        {
            content: "Rigettato da responsabile",
            className: "light-red"
        },
        {
            content: "Inviato al cliente",
            className: "blue"
        },
        {
            content: "Approvato da cliente",
            className: "green"
        },
        {
            content: "Rigettato da cliente",
            className: "red"
        }
    ]
    // Status Button
    const Statusbutton = document.querySelector(".status button")
    // Check For Toggel
    let check = true
    // Status Button Default Value
    let ButtonValue = "In attesa"
    // Status Button Default ClassName
    let ButtonClass = "btn"
    // Status Button Creat Status List And Toggle Show
    Statusbutton.addEventListener("click", (e) => {
        // Status List
        let ListDisplay = `                                    
            <ul class="status-list show">
            <li>Stati</li>
            ${StatusListData.map(e => `<li class=${e.className}>${e.content}</li>`).toString().replace(/,/g, "")}
            </ul>
            <span id="STATUS">In attesa</span>
            <i class="fa-solid fa-caret-down"></i>
        `
        // Overwrite Statusbutton innerHTML
        Statusbutton.innerHTML = ListDisplay
        // Set td To Overflow And z-inddex 
        Statusbutton.parentElement.style.overflow = "visible"
        Statusbutton.parentElement.style.zIndex = "1"

        document.querySelectorAll(".status-list.show li").forEach((e) => {
            e.addEventListener("click", (e) => {
                ButtonValue = e.target.textContent;
                ButtonClass = e.target.className
            })
        })

        check ?
            Statusbutton.firstElementChild.className = "status-list show" :
            Statusbutton.firstElementChild.className = "status-list"


        // Status List Button Arrow
        const ToggelArrow = Statusbutton.lastElementChild
        // Toggel Arrow IconButton ClassName from down to up     
        check ?
            ToggelArrow.classList.contains("fa-caret-up") ?
                ToggelArrow.classList.replace("fa-caret-down", "fa-caret-up") :
                ToggelArrow.classList.replace("fa-caret-up", "fa-caret-down") : null


        const STATUS = ToggelArrow.previousElementSibling

        STATUS.textContent = ButtonValue
        STATUS.className = ButtonClass
        Statusbutton.className = `flex ${ButtonClass}`
        check = !check
    })
    // Closing Status List And Change Arrow ClassName
    Statusbutton.addEventListener('blur', (e) => {
        // Set td to Hidden
        Statusbutton.firstElementChild.className = "status-list"
        check = true
    })
    // Status List Button For Loop Function
    let LoopButton = document.getElementById("loopButton")
    // Counter For Loop on Index
    let x = 1;
    LoopButton && LoopButton.addEventListener("click", (e) => {
        x === 6 ? x = 0 : null
        LoopButton.firstElementChild.innerHTML = StatusListData[x].content
        LoopButton.setAttribute("class", `flex ${StatusListData[x].className}`)
        x++
    });
    // *** Slider List Button
    // Open Slider Button
    const OpenSlider = document.querySelectorAll(".attaches")[0]
    // Slider
    const Slider = document.getElementById("Slider")
    OpenSlider.addEventListener("click", (e) => {
        // Fetch CreatedBy Name 
        const CreatedBy = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim()
        // Fetch Client Name 
        const ClientName = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent.trim()
        if (ClientData[ClientName]) {
            let HTMLView = `
            <div class="client-part">
            <h3>${ClientData[ClientName].Agenzia}</h3>
            <p>IT5349432102</p>
            <p>Via Napoli 1, 80010 Napoli (NA)</p>
            <p>${ClientData[ClientName].indirizzo + ClientData[ClientName].Civico + ',' + ClientData[ClientName].CAP + ClientData[ClientName].Città}</p>
            <p>+ 39 322 223 3244</p>
            <p>${ClientData[ClientName].Fax}</p>
            <p>${ClientData[ClientName].mail}</p>
            </div>
            <div class="request-status">
            <p>N° Preventivo <span>654865</span></p>
            <p>Creato da: <span>${CreatedBy}</span></p>
            <p>Approvato da: <span>Giuseppe Miraglia</span></p>
            </div>
            `

            document.querySelector(".slider-body .client-data").innerHTML = HTMLView
            let ClientHasData = document.querySelectorAll(".slider-body .Files .file-name h4")
            ClientFileR(ClientHasData)
        }
        // Open Slider
        Slider.classList.add("show")
    })
    // Print Data From Slider
    // Print Icon 
    const PrintIcon = document.querySelector(".fa-print")
    PrintIcon.addEventListener("click", (e) => {
        window.print()
    })

    // Close Slider By Return Button
    const ReturnButton = document.querySelector(".top i")
    ReturnButton.addEventListener("click", (e) => {
        Slider.classList.remove("show")
    })
}
//*** Client Data Page
// Client Select List
const SelectList = document.getElementById("Select")
if (SelectList) {
    SelectList.addEventListener("click", (e) => {
        // Toggel show Class on ClientList
        SelectList.nextElementSibling.classList.toggle("show")
    })
    // Render Selected Client Data In Form
    SelectList.nextElementSibling.addEventListener("click", function (e) {
        let SelectedClient = ""
        SelectedClient = e.target.textContent
        // Checking If Client Has Stored Data ? Render : Reload
        if (ClientData[SelectedClient]) {
            Object.getOwnPropertyNames(ClientData[SelectedClient]).map((element) => {
                let TagrgetElement = document.getElementById(element)
                TagrgetElement.removeAttribute('disabled')
                TagrgetElement.value = ClientData[SelectedClient][element]

            })

            const Notes = document.querySelectorAll(".Fixed-Elements .cell .options")
            ClientFileR(Notes)
        } else {
            location.reload()
        }

        this.classList.remove("show")
    });
    // ***  Upload File 
    // Upload File Input
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        const fileList = this.files[0];
        //Slice Only File Name
        let SliceFileName = fileList.name.indexOf(".")

        // console.log(fileList.name.slice(0, SliceFileName))
        // console.log(this.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.lastElementChild.textContent);
    }
    // ***  Submit Form Data 
    // Submit Button 
    const Submit = document.getElementById("Ok")
    Submit.addEventListener("click", (e) => {
        document.getElementById("form").submit()
    })
}