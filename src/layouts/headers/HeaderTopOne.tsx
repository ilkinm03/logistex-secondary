import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Link from "next/link"

const HeaderTopOne = () => {
    const router = useRouter();
    const localActive = useLocale();
  
    const pathname = usePathname();
  
    const languages = [{ label: "az" }, { label: "en" }, { label: "ru" }];
  
    const onSelectChange = (label: string) => {
      router.push(pathname, { locale: label });
      router.refresh();
    };
  return (
   <div className="tg-header__top">
   <div className="container-fluid p-0">
       <div className="row align-items-center">
           <div className="col-xl-5-right">
               <div className="tg-header__top-right">
                   <ul className="tg-header__top-menu list-wrap">
                    <li><button onClick={() => onSelectChange("az")} className="btn btn-success btn-sm p-2">AZ</button></li>
                    <li><button onClick={() => onSelectChange("ru")} className="btn btn-success btn-sm p-2">RU</button></li>
                    <li><button onClick={() => onSelectChange("en")} className="btn btn-success btn-sm p-2">EN</button></li>
                   </ul>
                   <div className="tg-header__top-social">
                       <span>Follow Us On:</span>
                       <ul className="list-wrap">
                           <li><Link href="https://www.linkedin.com/company/i̇ls-llc/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
  )
}

export default HeaderTopOne
