import React,{ useState }  from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-contnet: center;
position: rlative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Title = styled.div`
font-size: 52px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};
@media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
}
`;
const Description = styled.div`
font-size: 18px;
text-align: center;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    font-size: 16px;
}
`;

const ContactForm = styled.form`
width: 95%;
max-width: 600px;
display: flex;
flex-direction: column;
background-color: rgba(17, 25, 40, 0.83);
border: 1px solid rgba(255, 255, 255, 0.125);
padding: 32px;
border-radius: 12px;
box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
margin-top: 28px;
gap: 12px;
`;
const ContactTitle = styled.div`
font-size: 28px;
margin-bottom: 6px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
flex: 1;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.text_secondary + 50};
outline: none;
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 12px 16px;
&:focus {
    border: 1px solid ${({ theme }) => theme.primary};
}
`;
const ContactInputMessage = styled.textarea`
flex: 1;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.text_secondary + 50};
outline: none;
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 12px 16px;
&:focus {
    border: 1px solid ${({ theme }) => theme.primary};
}
`;
const ContactButton = styled.button`
width: 100%;
text-decoration: none;
text-align: center;
background: hsla(271, 100%, 50%, 1);
padding: 13px 16px;
margin-top: 2px;
border-radius: 12px;
border: none;
cursor:pointer;
color: ${({ theme }) => theme.text_primary};
font-size: 18px;
font-weight: 600;
`;

const Contact = () => {
    // const form = useRef();
    const [form,setForm] = useState({email:'',name:'',phone:'',subject:'',message:''});

    const onNameChange = (event) =>{
        setForm({...form,name:event.target.value});
    }
    const onEmailChange = (event) =>{
        setForm({...form,email:event.target.value});
    }
    const onPhoneChange = (event) =>{
        setForm({...form,phone:event.target.value});
    }
    const onSubjectChange = (event) =>{
        setForm({...form,subject:event.target.value});
    }
    const onMessageChange = (event) =>{
        setForm({...form,message:event.target.value});
    }

    const templateParams = {
        from_name:form.name,
        from_email:form.email,
        from_phone:form.phone,
        subject:form.subject,
        message:form.message
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("name:",form.name,"email:",form.email,"phone:",form.phone,"subject:",form.subject,"message:",form.message);
        setForm({name:'',email:'',phone:'',subject:'',message:''})
        emailjs.sendForm(
            "service_0dpwg7t",
            "template_lc7e6bd",
            templateParams,
            "-zxZG6sXb4Dqw97Qa"
        ).then(
            (result)=>{
            alert("Message Sent",result);
            form.current.result();
        },(error)=>{
            alert(error);
        })
    }
    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact</Title>
                <Description
                    style={{
                    marginBottom: "40px",
                }}>
                    Feel free to reach out to me for any questions or opportunities!
                </Description>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Enter your Email" type="email" name="email" value={form.email} onChange={onEmailChange} required/>
                    <ContactInput placeholder='Enter your Name' type='text' name='name' value={form.name} onChange={onNameChange} required/>
                    <ContactInput placeholder='Enter your Number' type='tel' name='phone' value={form.phone} onChange={onPhoneChange} required/>
                    <ContactInput placeholder='Enter Subject' type='text' name='subject' value={form.subject} onChange={onSubjectChange} required/>
                    <ContactInputMessage placeholder="Message" name = "message" rows={4} value={form.message} onChange={onMessageChange}/>
                    <ContactButton type="submit" value="Send">Submit</ContactButton>
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact