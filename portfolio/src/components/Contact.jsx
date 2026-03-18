import { Mail, Phone } from "lucide-react"



export const Contact = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mx-auto">
                I am always open to new opportunities and collaborations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:fasihzeeshan07@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    fasihzeeshan07@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone / WhatsApp</h4>
                                <a href="tel:033345325450" className="text-muted-foreground hover:text-primary transition-colors">
                                    +92 333 45325450
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
