import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.scss"

export function Info() {
    return(
        <div className="infos">
        <SectionTitle text ="Languages"/>
        <div className="languages-info">
            <span>• PT-BR - Native Speaker</span>  
            <span>• EN - Basic</span>
        </div>
        <SectionTitle text ="Education"/>
        <div className="education-info">
          <span>• Bachelor degree in IT - Universidade Federal do Semi-Árido</span>
        </div>
      </div>
    )
}