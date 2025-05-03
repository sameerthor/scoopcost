'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainDomainLink from '@/components/MainDomainLink';

import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {

  const router = useRouter();
  const [filterdata, setFilterdata] = useState([]);

  function fetchData() {
    axios.get('https://admin.suproffer.com/store-search')
      .then(function (response) {
        var d = response.data.map(item => { return { key: item.slug, value: item.title,subdomain:item.subdomain } })
        setFilterdata(d);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
    useEffect(() => {
      const toggler = document.querySelector('.navbar-toggler');
      const collapse = document.querySelector('.navbar-collapse');
  
      const closeNavbar = (event) => {
        if (collapse?.classList.contains('show')) {
          if (
            event.target !== toggler && // not clicking on toggler
            !collapse.contains(event.target)
          ) {
            // Trigger click to collapse it via Bootstrap JS
            toggler?.click();
          }
        }
      };
  
      window.addEventListener('scroll', closeNavbar);
      document.addEventListener('click', closeNavbar);
  
      return () => {
        window.removeEventListener('scroll', closeNavbar);
        document.removeEventListener('click', closeNavbar);
      };
    }, []);
  
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="mobileFlex">
            <button
              className="navbar-toggler order-lg-3"
              type="button"
              aria-label="Click here to toggle navigation"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <MainDomainLink className="navbar-brand brandLogo" href="/">
             <img src="/images/suproffer-logo.webp" alt="logo"  loading="lazy"/>
            </MainDomainLink>
            <div className="dummyBox"></div>
          </div>

          <div className="d-flex ms-auto order-lg-2 searchForm">
            
          <ReactSearchBox
                            placeholder="Search Store"
                            value=""
                            className="d-flex navbarSearch"
                            data={filterdata}
                            onFocus={()=>fetchData()}
                            clearOnSelect={true}
                            onSelect={(record) => {
                              const { key, subdomain } = record.item
                            
                              if (subdomain) {
                                window.location.href = `https://${key}.suproffer.com`
                              } else {
                                 window.location.href = `https://suproffer.com/${key}`
                              }
                            }}
                               leftIcon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="#2f3c97"
                                className="bi bi-search"
                                viewBox="0 0 20 20"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>}
                        />
                          <button class="btn btn-outline-success" type="button">Search</button>
           
          </div>

          <div className="collapse navbar-collapse justify-content-center order-lg-1" id="navbarNav">
            <ul className="navbar-nav navLinks">
              <li className="nav-item">
                <MainDomainLink className="nav-link" prefetch={false}
                  href="/stores">
                  Stores
                </MainDomainLink>
              </li>
              <li className="nav-item">
                <MainDomainLink className="nav-link" href="/">
                  Blog
                </MainDomainLink>
              </li>
              <li className="nav-item">
              <MainDomainLink className="nav-link" prefetch={false}
                  href="/category">
                  Category
                </MainDomainLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

      
