"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  full_name: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  country: z.string().min(1, { message: "Please select a country." }),
  role: z.string().min(1, { message: "Please select a role." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  past_participation: z.boolean(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  contact_information: z
    .string()
    .min(1, { message: "Please enter contact information." }),
});

const RegistrationForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      country: undefined,
      role: undefined,
      subject: undefined,
      past_participation: false,
      email: "",
      contact_information: "",
    },
  });

  const [countries, setCountries] = useState<{ id: number; name: string }[]>(
    []
  );
  const [roles, setRoles] = useState<{ id: number; name: string }[]>([]);
  const [subjects, setSubjects] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("http://192.168.1.108:8080/api/countries/", {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      });
      const data = await res.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const res = await fetch("http://192.168.1.108:8080/api/roles/", {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch roles");
        }

        const data = await res.json();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }

    fetchRoles();
  }, []);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const res = await fetch("http://192.168.1.108:8080/api/subjects/", {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch subjects");
        }

        const data = await res.json();
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    }

    fetchSubjects();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(
        "http://192.168.1.108:8080/api/participation-requests/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (res.ok) {
        toast.success("Registration submitted successfully!");
        form.reset();
      } else {
        toast.error("Failed to submit registration.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting.");
      console.error(error);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8"
    >
      <Toaster />
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Registration Form
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.isArray(countries) &&
                      countries.map((country) => (
                        <SelectItem
                          key={country.id}
                          value={country?.id?.toString()}
                        >
                          {country.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role?.id?.toString()}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        key={subject.id}
                        value={subject?.id?.toString()}
                      >
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="past_participation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Past Participation</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value === "true")}
                  defaultValue={field.value ? "true" : "false"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Have you participated before?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact_information"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Information</FormLabel>
                <FormControl>
                  <Input placeholder="Your contact information" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Submit Registration
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default RegistrationForm;
