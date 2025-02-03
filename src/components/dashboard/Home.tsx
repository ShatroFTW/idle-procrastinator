import {Button, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {variants} from "../../styles/theme/Animations";

const Home = () => {
    return (
        <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
            <Typography>
                HOME
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate libero.
                Cras maximus molestie sem vitae finibus. Aenean non eros eu leo finibus faucibus. Aliquam erat volutpat.
                Curabitur facilisis, nibh eget scelerisque tempus, nulla nibh convallis dui, ut feugiat urna lorem a
                lorem.
                Aenean fringilla, mauris sit amet interdum convallis, risus dui consectetur enim, vitae posuere nunc
                risus
                vel tellus. Cras et feugiat nunc. Pellentesque porttitor arcu nec libero dignissim, non luctus est
                eleifend.
                Maecenas dignissim vel lacus quis pretium. Donec vitae maximus tortor. Suspendisse interdum nunc nec
                nulla egestas tristique. Pellentesque ex lacus, mollis porttitor consectetur at, ultrices ac urna. In
                gravida mi sed lectus elementum, et faucibus libero fermentum. Nam vitae posuere turpis.
                Donec semper, odio et tincidunt laoreet, ante magna volutpat ex, nec ornare purus eros nec erat.
                Nulla rutrum sem tellus, ut elementum dui convallis eu. Aliquam ac tellus lacus. Morbi ut quam
                tincidunt,
                vestibulum augue ut, sodales augue. Nullam gravida leo a elementum dapibus. Fusce tempus ligula vel ex
                lacinia, quis venenatis purus fringilla. Donec vehicula augue non massa ultrices, id vestibulum tellus
                malesuada. Mauris ullamcorper massa eget gravida mollis. Nulla auctor hendrerit ex, quis luctus arcu
                luctus sed. Integer mollis, tellus tincidunt auctor venenatis, libero enim aliquam nisl, sed iaculis dui
                enim non neque.
                Maecenas feugiat, urna eget cursus blandit, turpis magna viverra nulla, a tempus enim leo volutpat
                velit.
                Suspendisse quis porttitor nisi, sed porttitor massa. Sed rutrum ullamcorper mi, vel commodo sem. Nam
                vulputate nisl id metus feugiat hendrerit. Suspendisse et augue non est iaculis elementum. Sed
                vulputate justo in magna cursus eleifend. Aliquam massa purus, eleifend at nibh sit amet, facilisis
                pretium
                nulla. Nam vestibulum pellentesque velit, at consectetur lorem placerat et. Phasellus rhoncus finibus
                ornare.
                Suspendisse molestie tristique odio vitae convallis. Morbi interdum consequat odio vitae varius.
                Maecenas
                aliquam blandit eleifend.
                Mauris pharetra sapien a imperdiet vestibulum. Phasellus iaculis rutrum dui et iaculis. Nam sagittis
                libero dui, vitae pellentesque libero luctus at. Quisque rhoncus velit vitae eros congue, in interdum
                turpis dapibus. Sed tincidunt est est, ut porta nisi sollicitudin sit amet. Nullam varius sem in lacus
                tristique consectetur eu in nisi. Cras lorem ipsum, gravida vel luctus id, posuere iaculis elit. Cras
                scelerisque, magna et tempus vestibulum, diam urna posuere magna, feugiat accumsan nisl mauris a nisi.
                Praesent eleifend nisl sit amet tortor mollis sollicitudin. Aliquam odio ipsum, laoreet nec consequat
                sed,
                maximus in sem. Integer non interdum nunc.
                Maecenas lacinia lorem tempus nisl cursus placerat. Integer pharetra at arcu nec interdum. Phasellus
                eget gravida quam. Fusce at consequat sapien. Maecenas sed bibendum massa. Curabitur pulvinar nibh in
                neque accumsan, a consequat neque maximus. Donec ac risus sit amet nulla interdum sagittis non vitae
                libero.
            </Typography>
            <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
                <Button variant={"outlined"}>Test</Button>
                <Button variant={"outlined"}>Test</Button>
                <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
                    <Button variant={"outlined"}>Test</Button>
                    <Button variant={"outlined"}>Test</Button>
                </motion.div>
                <Button variant={"outlined"}>Test</Button>
            </motion.div>
        </motion.div>
    )
};

export default Home;