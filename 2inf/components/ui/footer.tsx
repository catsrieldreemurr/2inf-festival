import Link from "next/link";
import FooterBox from "./footerbox";
import Typography from "./typography";
import FooterLink from "./footerbarLink";
import AssignIcon from "./assignIcons";

export default function Footerbar(){
    return (
        <footer className="bg-slate-900 p-5 flex flex-col sm:flex-row gap-5 text-white mt-5 ">

            <FooterBox>
                <Typography variant="h1" isBold>2INF-Festivalen</Typography>
                <Typography>Innlandets beste møtearena</Typography>
                
                <Link href={"/staffedit"}><Typography spacer style="hover:underline text-red-200">For Arrangører</Typography></Link>
            </FooterBox>

            <FooterBox>
                <Typography variant="h1" isBold>Sider</Typography>
                <Typography style="mb-5">Les mer om Festivalen her!</Typography>
                
                <FooterLink href="/">- Om Festivalen</FooterLink>
                <FooterLink href="/program">- Program og Gjester</FooterLink>
                <FooterLink href="/map">- Kart</FooterLink>
                
            </FooterBox>

            <FooterBox>
                <Typography variant="h1" isBold>Kontakt Oss</Typography>
                <Typography style="mb-5" isCentered>Har du noen spørsmål, eller vil du vite mer? Ta kontakt.</Typography>
                <AssignIcon src="/phone.png" imageAlt="Phone">+47 12345678</AssignIcon>
                <AssignIcon src="/email.png" imageAlt="Email"><a href={"mailto:festivalsjef@2inf.no"}>festivalsjef@2inf.no</a></AssignIcon>
            </FooterBox>
        </footer>
    )
}