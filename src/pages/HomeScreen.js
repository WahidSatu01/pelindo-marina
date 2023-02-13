import {
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HomeScreen = () => {
  return (
    // <ImageBackground
    //   source={require("../assets/images/begron.jpg")}
    //   style={{ flex: 1 }}
    // >
    //   <View style={{ flex: 1, paddingTop: 70 }}>
    //     <View style={{ flexDirection: "row" }}>
    //       <View
    //         style={{
    //           paddingLeft: 30,
    //           // backgroundColor: "red",
    //         }}
    //       >
    //         <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
    //           Discover
    //         </Text>
    //         <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
    //           Indonesia Marina
    //         </Text>
    //       </View>
    //       <View
    //         style={{
    //           // backgroundColor: "white",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Image
    //           source={require("../assets/images/profil.jpg")}
    //           style={{
    //             width: 50,
    //             height: 50,
    //             borderRadius: 50,
    //             marginLeft: 102,
    //           }}
    //         ></Image>
    //       </View>
    //     </View>
    //     <View style={{ paddingLeft: 30, paddingTop: 30, paddingBottom: 30 }}>
    //       <Text style={{ color: "white" }}>
    //         Marina with the best quality of service and
    //       </Text>
    //       <Text style={{ color: "white" }}>
    //         facilities, perfectly located for easy access to the
    //       </Text>
    //       <Text style={{ color: "white" }}>sea and transportation.</Text>
    //     </View>
    //     <View
    //       style={{ flex: 1, alignItems: "center", backgroundColor: "grey" }}
    //     >
    //       <ScrollView style={{ paddingTop: 20 }}>
    //         {/* Benoa marina bali */}
    //         <TouchableOpacity
    //           style={{
    //             flex: 1,
    //             alignItems: "center",
    //           }}
    //         >
    //           <Image
    //             source={require("../assets/images/pontoonBali.jpeg")}
    //             style={{
    //               width: 340,
    //               height: 130,
    //               borderRadius: 20,
    //             }}
    //           ></Image>
    //           <View
    //             style={{
    //               position: "absolute",
    //               flexDirection: "row",
    //               alignItems: "center",
    //               paddingTop: 32,
    //             }}
    //           >
    //             <FontAwesome name="ship" color="white" size={40} />
    //             <View style={{ paddingHorizontal: 25 }}>
    //               <Text
    //                 style={{
    //                   fontSize: 30,
    //                   color: "white",
    //                   fontWeight: "bold",
    //                 }}
    //               >
    //                 Benoa Marina Bali
    //               </Text>
    //               <Text style={{ fontSize: 12, color: "white" }}>
    //                 Jl Raya Pelabuhan Dermaga Benoa Marina
    //               </Text>
    //               <Text style={{ fontSize: 12, color: "white" }}>
    //                 South Denpasar, Bali Indonesia 80222
    //               </Text>
    //             </View>
    //             <FontAwesome name="arrow-right" color="white" size={20} />
    //           </View>
    //         </TouchableOpacity>

    //         {/* Boom marina banyuwangi */}
    //         <TouchableOpacity
    //           style={{
    //             flex: 1,
    //             alignItems: "center",
    //             paddingTop: 20,
    //           }}
    //         >
    //           <Image
    //             source={require("../assets/images/pontoonBali.jpeg")}
    //             style={{
    //               width: 340,
    //               height: 130,
    //               borderRadius: 20,
    //             }}
    //           ></Image>
    //           <View
    //             style={{
    //               position: "absolute",
    //               flexDirection: "row",
    //               alignItems: "center",
    //               paddingTop: 52,
    //             }}
    //           >
    //             <FontAwesome name="ship" color="white" size={40} />
    //             <View style={{ paddingHorizontal: 25 }}>
    //               <Text
    //                 style={{
    //                   fontSize: 30,
    //                   color: "white",
    //                   fontWeight: "bold",
    //                 }}
    //               >
    //                 Benoa Marina Bali
    //               </Text>
    //               <Text style={{ fontSize: 12, color: "white" }}>
    //                 Kampung Mandar, Kec. Banyuwangi
    //               </Text>
    //               <Text style={{ fontSize: 12, color: "white" }}>
    //                 Kabupaten Banyuwangi, Jawa Timur 68419
    //               </Text>
    //             </View>
    //             <FontAwesome name="arrow-right" color="white" size={20} />
    //           </View>
    //         </TouchableOpacity>

    //         {/* button */}
    //         <TouchableOpacity
    //           style={{
    //             backgroundColor: "skyblue",
    //             alignItems: "center",
    //             padding: 10,
    //             borderRadius: 10,
    //             marginTop: 20,
    //           }}
    //         >
    //           <Text
    //             style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
    //           >
    //             YACH ROUTE MAP INFORMATION
    //           </Text>
    //         </TouchableOpacity>

    //         {/* marina sevices */}
    //         <View
    //           style={{
    //             backgroundColor: "white",
    //             paddingVertical: 30,
    //             paddingHorizontal: 30,
    //             alignItems: "center",
    //             borderRadius: 20,
    //             marginTop: 20,
    //           }}
    //         >
    //           <Text style={{ fontSize: 30, fontWeight: "bold" }}>
    //             Marina Sevices
    //           </Text>
    //           <Text>We offer services in providing</Text>
    //           <Text>accomodation</Text>

    //           {/* Hotel */}
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               marginTop: 20,
    //             }}
    //           >
    //             <FontAwesome name="arrow-right" color="black" size={20} />
    //             <View style={{ paddingHorizontal: 10 }}>
    //               <Text>Hotel</Text>
    //               <Text>Hotel Booking Services</Text>
    //             </View>
    //           </View>

    //           {/* Hotel */}
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               marginTop: 20,
    //             }}
    //           >
    //             <FontAwesome name="arrow-right" color="black" size={20} />
    //             <View style={{ paddingHorizontal: 10 }}>
    //               <Text>Hotel</Text>
    //               <Text>Hotel Booking Services</Text>
    //             </View>
    //           </View>

    //           {/* Hotel */}
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               marginTop: 20,
    //             }}
    //           >
    //             <FontAwesome name="arrow-right" color="black" size={20} />
    //             <View style={{ paddingHorizontal: 10 }}>
    //               <Text>Hotel</Text>
    //               <Text>Hotel Booking Services</Text>
    //             </View>
    //           </View>

    //           {/* Hotel */}
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               marginTop: 20,
    //             }}
    //           >
    //             <FontAwesome name="arrow-right" color="black" size={20} />
    //             <View style={{ paddingHorizontal: 10 }}>
    //               <Text>Hotel</Text>
    //               <Text>Hotel Booking Services</Text>
    //             </View>
    //           </View>

    //           {/* Hotel */}
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               alignItems: "center",
    //               marginTop: 20,
    //             }}
    //           >
    //             <FontAwesome name="arrow-right" color="black" size={20} />
    //             <View style={{ paddingHorizontal: 10 }}>
    //               <Text>Hotel</Text>
    //               <Text>Hotel Booking Services</Text>
    //             </View>
    //           </View>
    //         </View>

    //         {/* Next */}
    //         <View>
    //           <Text style={{ marginTop: 60, fontSize: 20 }}>Next Event</Text>
    //         </View>
    //       </ScrollView>
    //     </View>
    //   </View>
    // </ImageBackground>

    <TouchableOpacity>
      <Image source={require("../assets/imagesV2/Button Boom.jpg")}></Image>
    </TouchableOpacity>
  );
};

export default HomeScreen;
